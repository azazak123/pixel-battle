{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    systems.url = "github:nix-systems/default";
    devenv.url = "github:cachix/devenv";
  };

  nixConfig = {
    extra-trusted-public-keys = "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    extra-substituters = "https://devenv.cachix.org";
  };

  outputs = { self, nixpkgs, devenv, systems, ... } @ inputs:
    let
      forEachSystem = nixpkgs.lib.genAttrs (import systems);
    in
    {
      packages = forEachSystem (system: {
        devenv-up = self.devShells.${system}.default.config.procfileScript;
      });

      devShells = forEachSystem
        (system:
          let
            pkgs = nixpkgs.legacyPackages.${system};
          in
          {
            default = devenv.lib.mkShell {
              inherit inputs pkgs;
              modules = [
                {
                  # https://devenv.sh/reference/options/
                  packages = with pkgs; [ nixpkgs-fmt dbmate postgresql_15 ];

                  languages.dotnet = {
                    enable = true;
                    package = pkgs.dotnet-sdk_8;
                  };

                  languages.javascript = {
                    enable = true;
                    corepack.enable = true;
                  };
                  languages.typescript.enable = true;

                  languages.nix.enable = true;

                  dotenv.enable = true;

                  processes.hasura.exec = "podman-compose up";

                  enterShell = ''
                  '';
                }
              ];
            };
          });
    };
}

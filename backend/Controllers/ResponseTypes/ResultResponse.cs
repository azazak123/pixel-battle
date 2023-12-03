namespace backend.Controllers.ResponseTypes;

public class ResultResponse<T>
{
    public bool Result { get; set; }
    public T? Value { get; set; }
}

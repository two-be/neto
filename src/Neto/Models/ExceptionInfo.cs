namespace Neto.Models;

public class ExceptionInfo
{
    public ExceptionInfo? InnerException { get; set; }
    public string Message { get; set; } = string.Empty;
    public string StackTrace { get; set; } = string.Empty;

    public ExceptionInfo(string message, string stackTrace)
    {
        Message = message;
        StackTrace = stackTrace;
    }

    public ExceptionInfo(Exception ex)
    {
        if (ex.InnerException is not null)
        {
            InnerException = new ExceptionInfo(ex.InnerException);
        }
        Message = ex.Message;
        StackTrace = ex.StackTrace ?? string.Empty;
    }
}
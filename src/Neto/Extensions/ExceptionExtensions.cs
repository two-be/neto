using Neto.Models;

namespace Neto.Extensions;

public static class ExceptionExtensions
{
    public static ExceptionInfo ToInfo(this Exception ex)
    {
        return new ExceptionInfo(ex);
    }
}
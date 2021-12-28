namespace Neto.Models;

public class NoteInfo
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string AppleMapsUrl { get; set; } = string.Empty;
    public string Detail { get; set; } = string.Empty;
    public string GoogleMapsUrl { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
}
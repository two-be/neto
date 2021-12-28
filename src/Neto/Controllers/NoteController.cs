using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Neto.Data;
using Neto.Extensions;
using Neto.Models;

namespace Neto.Controllers;

[ApiController]
[Route("[controller]")]
public class NoteController : ControllerBase
{
    private readonly AppDbContext _context;

    public NoteController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("Type/{type}")]
    public async Task<ActionResult<List<NoteInfo>>> GetByType(string type)
    {
        try
        {
            var notes = await _context.Notes.Where(x => x.Type == type).ToListAsync();
            return notes;
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.ToInfo());
        }
    }

    [HttpPost]
    public async Task<ActionResult<NoteInfo>> Post([FromBody] NoteInfo value)
    {
        try
        {
            var note = new NoteInfo
            {
                AppleMapsUrl = value.AppleMapsUrl ?? string.Empty,
                Detail = value.Detail ?? string.Empty,
                GoogleMapsUrl = value.GoogleMapsUrl ?? string.Empty,
                ImageUrl = value.ImageUrl ?? string.Empty,
                Name = value.Name ?? string.Empty,
                Type = value.Type ?? string.Empty,
                Url = value.Url ?? string.Empty,
            };
            await _context.Notes.AddAsync(note);
            await _context.SaveChangesAsync();
            return note;
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.ToInfo());
        }
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<NoteInfo>> Put(string id, [FromBody] NoteInfo value)
    {
        try
        {
            var note = await _context.Notes.FirstOrDefaultAsync(x => x.Id == id);
            if (note is null)
            {
                return BadRequest(new ExceptionInfo("That note doesn't exist.", id));
            }
            note.AppleMapsUrl = value.AppleMapsUrl ?? string.Empty;
            note.Detail = value.Detail ?? string.Empty;
            note.GoogleMapsUrl = value.GoogleMapsUrl ?? string.Empty;
            note.ImageUrl = value.ImageUrl ?? string.Empty;
            note.Name = value.Name ?? string.Empty;
            note.Type = value.Type ?? string.Empty;
            note.Url = value.Url ?? string.Empty;
            await _context.SaveChangesAsync();
            return note;
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.ToInfo());
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(string id)
    {
        try
        {
            var note = await _context.Notes.FirstOrDefaultAsync(x => x.Id == id);
            if (note is null)
            {
                return BadRequest(new ExceptionInfo("That note doesn't exist.", id));
            }
            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();
            return Ok();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.ToInfo());
        }
    }
}

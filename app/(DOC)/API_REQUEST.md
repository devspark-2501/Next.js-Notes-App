await fetch("/api/DataFetch", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ id: item.id })
});

async function DeleteNote(id) {
    try {
        await fetch("/api/DataFetch", {
            method: "Delete",
            headers: {
                'content-Type: "application/json"
            },
            body: JSON.stringify({ id })
        });

        setData(data.filter(item) => item.id !== id);
    }
}


export async function DELETE(request) {
    await connectDB();
    
    const body = await request();
    
    await Note,findByIdAndDelete(body.id);

    return NextResponse.json({
        message: "Note Deleted
    });
}
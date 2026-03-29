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
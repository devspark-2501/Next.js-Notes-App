export default function Home() {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    function AddData(e) {
        if (input === "") {
            return alert("feild cannot be empty");
        } else {
            const noteData = [...data, input];

            setData(noteData);
            setInput("");
        }

    }
    return (
        <div>
            <input 
                placeholder="enter ur task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            
            <button onClick={AddData}>
                Click
            </button>

            {data.map((item, index) => (
                <h1 key={index}>{item}</h1>
            ))}
        </div>
    )
}
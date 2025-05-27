import { useState, useEffect } from "react";

function Home() {
    const [counts, setCounts] = useState({
        book_count: 0,
        book_instance_count: 0,
        book_instance_available_count: 0,
        author_count: 0,
        genre_count: 0
    });

    useEffect(() => {
        fetch("http://localhost:3000/api/library-stats") // Express API to get counts
            .then(response => response.json())
            .then(data => {
                console.log("✅ API Response:", data);
                setCounts(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Welcome to <em>LocalLibrary</em></h1>
            <p>A very basic Express website developed as a tutorial example on the Mozilla Developer Network.</p>

            <h2>Dynamic content</h2>
            <p>The library has the following record counts:</p>
            <ul>
                <li><strong>Books:</strong> {counts.book_count}</li>
                <li><strong>Copies:</strong> {counts.book_instance_count}</li>
                <li><strong>Copies available:</strong> {counts.book_instance_available_count}</li>
                <li><strong>Authors:</strong> {counts.author_count}</li>
            </ul>
        </div>
    );
}

export default Home;


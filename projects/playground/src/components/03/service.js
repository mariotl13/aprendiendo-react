

export const getCatData = (setFact, setImage) => {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            setFact(data.fact)
            const firstWord = data.fact.split(" ")[0];

            fetch(`https://cataas.com/cat/says/${firstWord}?width=300&height=300`)
                .then(response => response.url)
                .then(data => setImage(data))
                .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
}
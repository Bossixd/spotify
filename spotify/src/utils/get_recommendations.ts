const get_recommendations = (
    setRecommendations: (recommendations: any) => void
) => {
        fetch("http://localhost:3001/song/get-recommendations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setRecommendations(data);
            })
};

export default get_recommendations;

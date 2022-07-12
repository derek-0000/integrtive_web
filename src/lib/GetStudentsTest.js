const URL = "https://intregrative-api.herokuapp.com/>"

class http{
    static instance = new http();
    getStudents = async() => {
        try{
            const request = await fetch(`${URL}students/`);
            const response = await request.json();
            return response;
        }catch(err){
            throw new Error(err);
        }

    }
}
export default http;
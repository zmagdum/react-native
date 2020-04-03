import {useEffect, useState} from 'react';
import catfetchapi from '../api/catfetchapi'

export default () => {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')
  const catApi = async () => {
    try {
      var response = await catfetchapi.get('/categories.json');
      response.data.sort(function(s1, s2) {
        if (s1.title < s2.title)
          return -1;
        if (s1.title > s2.title)
          return 1;
        return 0;
      });
      //console.log(response.data)
      setCategories(response.data);
    } catch(err) {
      console.log("Error fetching categories", err)
      setErrorMessage('Some error occurred')
    }
  }

  useEffect(() => {
    catApi();
  }, [])
  return [catApi, categories, errorMessage];
}

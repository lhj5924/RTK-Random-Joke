import { useState } from 'react';
import {useGetJokeByCategoryQuery} from './useAPI'

function App() {
const [category, setCategory] = useState('general')
  const {data, error, isLoading, refetch} = useGetJokeByCategoryQuery(category)

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

 function handleOnClick() {
  refetch(); // API 다시 호출
 }

  return (
    <>
    <div className="App">
    <div>
        <label htmlFor="category">Select Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="general">General</option>
          <option value="programming">Programming</option>
          <option value="knock-knock">Knock Knock</option>
        </select>
      </div>
      {error? (<p>error!</p>) : isLoading ? (<p>Loading...</p>) : data ? (<><h1>{data[0]?.setup}</h1><p>{data[0]?.punchline}</p></>) : null}
    </div>
    <button onClick={handleOnClick}>Random!</button>
    <p>Jokes from <a href='https://github.com/15Dkatz/official_joke_api' aria-label='JOKE API'>https://github.com/15Dkatz/official_joke_api</a>(not from me!)</p>
    </>

  );
}

export default App;

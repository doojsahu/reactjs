import react, { useEffect, useState } from 'react';
import './../App.css';

// No Dependency => Render All State
// Empty Dependency => Render Once
// Dependency => Depencies Change

// We Can Use Multiple UseEffect (call back function)

function UseEffectHooks() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    // Like ComponentDidMount
    useEffect(() => {
        console.log('hii')
    }, [count]);


  return (
    <div className="App">
      <header className="App-header">
        UseEffect Hooks - Will work while rerendring ::
        <div>{ count }</div>
        <div onClick={() => {
            setCount(count + 1)
        }}>Add Count</div>


        <div>{ count1 }</div>
        <div onClick={() => {
            setCount1(count1 + 1)
        }}>Add Count-1</div>
      </header>
    </div>
  );
}

export default UseEffectHooks;

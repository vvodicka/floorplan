import React, {useState} from 'react';
import './App.css';

type BlockProps = {
  defaultColor: 'white' | 'red' | 'green'
}
const Block = ({defaultColor}: BlockProps) => {
  const [color, setColor] = useState(defaultColor)

  const handleClick = () => {
    switch (color) {
      case 'white': setColor('red'); break;
      case 'red': setColor('green'); break;
      case 'green': setColor('white'); break;
    }
  }

  return <div className="Block" style={{backgroundColor: color}} onClick={handleClick}></div>
}

export const App = () => {
  return (
    <div className="App">
      <table>
        <tr>
          <td>
            <Block defaultColor={"white"} />
          </td>
          <td>
            <Block defaultColor={"white"} />
          </td>
          <td>
            <Block defaultColor={"white"} />
          </td>
        </tr>
        <tr>
          <td>
            <Block defaultColor={"white"} />
          </td>
          <td>
            <Block defaultColor={"white"} />
          </td>
          <td>
            <Block defaultColor={"white"} />
          </td>
        </tr>
        <tr>
          <td>
            <Block defaultColor={"white"} />
          </td>
          <td>
            <Block defaultColor={"white"} />
          </td>
          <td>
            <Block defaultColor={"white"} />
          </td>
        </tr>
      </table>
    </div>
  );
}

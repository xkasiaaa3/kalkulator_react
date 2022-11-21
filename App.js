import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
};

export default function App() {
  function parse(str) {
    return Function(`'use strict'; return (${str})`)();
  }

  const [result, setResult] = React.useState('0');

  const window = Dimensions.get('window');
  const screen = Dimensions.get('screen');

  const [dimensions, setDimensions] = React.useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  React.useEffect(() => {
    Dimensions.addEventListener('change', onChange);

    return () => {
      //   Dimensions.removeEventListener('change', onChange.bind(null));
    };
  });

  function isLandscape() {
    return dimensions.window.height < dimensions.window.width;
  }

function buttonFunction(el){
const sign = el.text;

  switch (sign){
    case '=':
      setResult(parse(result));
      break;
    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '(': case ')':
      setResult(result != '0' ? result + sign : sign);
      break;
    case '/': case '*': case '+': case '-': case '.':
      setResult(result + sign);
      break;
    case 'AC':
      setResult('0');
      break;
    case '√x':
      setResult('(' + result + ')**(1/2)');
      break;
    case 'x³':
      setResult('(' + result + ')**3');
      break;
    case 'x²':
      setResult('(' + result + ')**2');
      break;
    default: 
  }

return;

}


  const buttonsArray = [
    [
      {
        style: styles.calcButton,
        text: '(',
      },
      { style: styles.calcButton, text: 'AC' },
      {
        style: [styles.calcButton, styles.extraFlex],
        text: '',
        disabled: true,
      },
      {
        style: styles.calcButton,
        text: '/',
      },
    ],
    [
      {
        style: styles.calcButton,
        text: ')',
      },
      {
        style: styles.calcButton,
        text: '7',
      },
      {
        style: styles.calcButton,
        text: '8',
      },
      {
        style: styles.calcButton,
        text: '9',
      },
      {
        style: styles.calcButton,
        text: '*',
      },
    ],
    [
      {
        style: styles.calcButton,
        text: '√x',
      },
      {
        style: styles.calcButton,
        text: '4',
      },
      {
        style: styles.calcButton,
        text: '5',
      },
      {
        style: styles.calcButton,
        text: '6',
      },
      {
        style: styles.calcButton,
        text: '-',
      },
    ],
    [
      {
        style: styles.calcButton,
        text: 'x³',
      },

      {
        style: styles.calcButton,
        text: '1',
      },
      {
        style: styles.calcButton,
        text: '2',
      },
      {
        style: styles.calcButton,
        text: '3',
      },
      {
        style: styles.calcButton,
        text: '+',
      },
    ],
    [
      {
        style: styles.calcButton,
        text: 'x²',
      },
      {
        style: [styles.calcButton, styles.extraFlex],
        text: '0',
      },
      {
        style: styles.calcButton,
        text: '.',
      },
      {
        style: styles.calcButton,
        text: '=',
      },
    ],
  ];


  const mappedButtons = buttonsArray.map((items) => (
    <View style={styles.container}>
      {items.map((i, index) =>
        index > 0 || (index == 0 && isLandscape()) ? (
          <TouchableOpacity style={i.style} disabled={i.disabled} onPress= {() => buttonFunction(i)}>
            <Text style={styles.textStyle}>{i.text}</Text>
          </TouchableOpacity>
        ) : null
      )}
    </View>
  ));

  return (
    <View style={styles.bigContainer}>
      <View style={styles.container}>
        <Text style={styles.showStyle}>{result}</Text>
      </View>
      {mappedButtons}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    //flexWrap: 'wrap',
    width: '100%',
  },
  bigContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#358c6b',
  },
  calcButton: {
    //padding: 5,
    backgroundColor: '#33438a',
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
  },
  extraFlex: {
    flex: 2,
  },
  textStyle: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
  },
  showStyle: {
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 50,
    width: '100%',
  },
});

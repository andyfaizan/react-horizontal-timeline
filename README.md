# React Horizontal Catalog Stepper

This module is not ready for production use. Please use it at your own risk!

This is a fork of the react port of the horizontal time-line developed by CodyHouse.

Unlike the original repository, this stepper is meant for browsing a catalog styled component.

## HorizontalTimeline

This will render a horizontal stepper with the labels (like chapter names) that you provide padded by a distance calculated based on the number of pages in each chapter (also passed as the prop `values`).

| Property                  | Type     | Default                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                  |
| :------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| labels (**required**)     | array    | undefined                                                                                                                                                                                                                                                                  | array of chapter names                                                                                                                                                                                                                                                                                                                                                       |
| values (**required**)     | array    | undefined                                                                                                                                                                                                                                                                  | array of number of pages in each chapter                                                                                                                                                                                                                                                                                                                                     |
| indexClick (**required**) | function | undefined                                                                                                                                                                                                                                                                  | function that takes the index of the array as argument                                                                                                                                                                                                                                                                                                                       |
| index (**required**)      | number   | undefined                                                                                                                                                                                                                                                                  | the index of the selected chapter                                                                                                                                                                                                                                                                                                                                            |
| unitPadding               | number   | 50                                                                                                                                                                                                                                                                         | Unit padding between two pages                                                                                                                                                                                                                                                                                                                                               |
| minEventPadding           | number   | undefined                                                                                                                                                                                                                                                                  | The minimum padding between two event labels                                                                                                                                                                                                                                                                                                                                 |
| maxEventPadding           | number   | undefined                                                                                                                                                                                                                                                                  | The maximum padding between two event labels                                                                                                                                                                                                                                                                                                                                 |
| linePadding               | number   | 100                                                                                                                                                                                                                                                                        | Padding used at the start and end of the timeline                                                                                                                                                                                                                                                                                                                            |
| labelWidth                | number   | 85                                                                                                                                                                                                                                                                         | The width of an individual label                                                                                                                                                                                                                                                                                                                                             |
| fillingMotion             | object   | { stiffness: 150, damping: 25 }                                                                                                                                                                                                                                            | Sets the animation style of how filling motion will look                                                                                                                                                                                                                                                                                                                     |
| slidingMotion             | object   | { stiffness: 150, damping: 25 }                                                                                                                                                                                                                                            | Sets the animation style of how sliding motion will look                                                                                                                                                                                                                                                                                                                     |
| styles                    | object   | { background: '#f8f8f8', foreground: '#7b9d6f', outline: '#dfdfdf', svgFill: '#7b9d6f', position: "absolute", left: 0, top: "50%", bottom: "auto", transform: "translate(25%,-30%)", height: 20, width: 29, overflow: "hidden", textIndent: "100%", whiteSpace: "nowrap" } | object containing the styles for the timeline currently outline (the color of the boundaries of the timeline and the buttons on it's either side), foreground (the filling color, active color), background (the background color of your page), svgFill (the fill color for the left and right button icons) colors of the timeline can be changed amongst other properties |
| isTouchEnabled            | boolean  | true                                                                                                                                                                                                                                                                       | Enable touch events (swipe left, right)                                                                                                                                                                                                                                                                                                                                      |
| isKeyboardEnabled         | boolean  | true                                                                                                                                                                                                                                                                       | Enable keyboard events (up, down, left, right)                                                                                                                                                                                                                                                                                                                               |
| isOpenBeginning           | boolean  | true                                                                                                                                                                                                                                                                       | Show the beginning of the timeline as open ended                                                                                                                                                                                                                                                                                                                             |
| isOpenEnding              | boolean  | true                                                                                                                                                                                                                                                                       | Show the ending of the timeline as open ended                                                                                                                                                                                                                                                                                                                                |

This is how it can be used.

```
const VALUES = [ 2, 5, 15, 4 ];
const LABELS = [ "Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4" ];

export default class App extends React.Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={ VALUES }
            labels={ LABELS } />
        </div>
        <div className='text-center'>
          {/* any arbitrary component can go here */}
          {this.state.value}
        </div>
      </div>
    );
  }
}

```

For more advanced usage take a look at the demos directory.

## Running the development version

- Just clone the repo and do an `npm install` (or `yarn install`)
- Note: You will need to do `npm install react react-dom` to install `peerDependencies` as both `yarn` and `npm` don't do this.
- Run `npm run start`/`npm start`/`yarn start`.
- Then go to `localhost:5001/demos/<demo_name>/index.html` to see the fruits of your labor.

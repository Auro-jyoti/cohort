/* 
    Hooks are a feature introduced in React, that allow you to use state and other React features without writing class. They are functions that let you "Hook into" React state and lifeCycle features from function components.
*/

function MyComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };


    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementCount}>incrementCount</button>
        </div>
    )
}

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}

function MyComponentTwo() {
    useEffect(() => {
        // perform setup or data fetching here

        return () => {
            //cleanup code(similar to componentWillUnmount)
        };
    }, []);
}

class MyComponentTwo extends React.Component {
     componentDidMount() {
        // Perform setup or data fetching here
     }

     componentWillUnmount() {
        // Clean up
     }

     render() {
        
     }
}
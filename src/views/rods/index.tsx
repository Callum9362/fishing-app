import * as React from 'react';

interface IRodsViewProps {
    title: string;
}

class RodsView extends React.Component<IRodsViewProps> {
    render() {
        return (
            <div>
                <h2>Index</h2>
                <p>Hello from our RodsView component!</p>
            </div>
        );
    }
}

export default RodsView;
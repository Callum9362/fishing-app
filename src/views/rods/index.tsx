import * as React from 'react';
import BaseLayout from '../../layouts/base';

interface IRodsViewProps {
    title: string;
}

class RodsView extends React.Component<IRodsViewProps> {
    render() {
        return (
            <BaseLayout title={this.props.title}>
                <h2>Index</h2>
                <p>Hello from our MoviesView component!</p>
            </BaseLayout>
        );
    }
}

export default RodsView;
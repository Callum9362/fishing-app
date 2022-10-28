import * as React from 'react';

interface IBaseLayoutProps {
    title: string;
    children: React.ReactNode;
}

class BaseLayout extends React.Component<IBaseLayoutProps> {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <header>
                        <h1>{this.props.title} - Fish App</h1>
                    </header>
                    <main>{this.props.children}</main>
                </body>
            </html>
        );
    }
}

export default BaseLayout;
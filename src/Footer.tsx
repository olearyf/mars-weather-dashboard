import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';

export class Footer extends React.Component<{}, {}> {
    public render () {
        return(
        <div className='footer'>
            <Label>An afternoon project by Frances O'Leary using the NASA InSight API. Code <a href="" target="_blank">here</a>.</Label>
        </div>)
    }
}
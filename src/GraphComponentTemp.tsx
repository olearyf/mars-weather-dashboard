import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

export interface IGraphComponentTempProps {
    readonly data: any;
    readonly xDataKey: string;
    readonly yDataKeyAvg: string;
    readonly yDataKeyMin: string;
    readonly yDataKeyMax: string;
    readonly yAxisLabel: string;
    readonly colors: string[];
}

export default class GraphComponentTemp extends React.Component<IGraphComponentTempProps, {}> {

    constructor(props: IGraphComponentTempProps) {
        super(props);
    }

  render() {
    return (
      <AreaChart
        width={500}
        height={400}
        data={this.props.data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={this.props.xDataKey}>
            <Label value="sol #" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis>
            <Label value={this.props.yAxisLabel} angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Legend verticalAlign="top" height={36}/>
        <Area type="monotone" dataKey={this.props.yDataKeyMax} stackId="1" stroke={this.props.colors[0]} fill={this.props.colors[0]} />
        <Area type="monotone" dataKey={this.props.yDataKeyAvg} stackId="1" stroke={this.props.colors[1]} fill={this.props.colors[1]} />
        <Area type="monotone" dataKey={this.props.yDataKeyMin} stackId="1" stroke={this.props.colors[2]} fill={this.props.colors[2]} />
      </AreaChart>
    );
  }
}

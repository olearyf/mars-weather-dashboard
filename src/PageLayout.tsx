import React from 'react';
import './App.css';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Footer } from './Footer';
import { MarsDataHandler } from './MarsDataHandler';
import GraphComponent from './GraphComponent';
import GraphComponentTemp from './GraphComponentTemp';
import { Text, ITextStyles } from 'office-ui-fabric-react/lib/Text';
import { FontWeights } from 'office-ui-fabric-react/lib/Styling';

export interface IPageLayoutStates {
  data: any;
}
export class PageLayout extends React.Component<{}, IPageLayoutStates> {

  marsDataHandler = new MarsDataHandler();
  boldStyle: ITextStyles = {
    root: { fontWeight: FontWeights.bold }
  };
  stackTokens: IStackTokens = { childrenGap: 40 };
  temp_colors = ["#FF9671", "#FFC75F", "#B39CD0"];
  wind_colors = ["#845EC2", "#D65DB1", "#FF6F91"];
  pressure_colors = ["#296073", "#3596B5", "#ADC5CF"];

  constructor(props: Readonly<{}>){
    super(props);
    this.state = ({
      data: [{sol: "123", test: 15}]
    })
  }

  public async componentWillMount() {
    await this.marsDataHandler.getData();
    console.log(this.marsDataHandler.getCompiledData())
    this.setState({
      data: this.marsDataHandler.getCompiledData()
    })
    
  }
  
  public render() {
    console.log(this.state.data);
    return(
      <div className="Content">
        <Stack tokens={this.stackTokens}>
          <Stack.Item align="center">
            <Text variant="xxLargePlus" styles={this.boldStyle}>Mars Weather Dashboard</Text>
          </Stack.Item>
          <Stack>
            <Stack.Item align="center">
              <Text variant="xLarge">Temperature</Text>
            </Stack.Item>
            <Stack.Item align="center">
              <GraphComponentTemp colors={this.temp_colors} yAxisLabel={"degrees C"} data={this.state.data} xDataKey={"sol"} yDataKeyAvg={"temp_avg"} yDataKeyMax={"temp_max"} yDataKeyMin={"temp_min"} />
            </Stack.Item>
          </Stack>
          <Stack>
            <Stack.Item align="center">
              <Text variant="xLarge">Wind</Text>
            </Stack.Item>
            <Stack.Item align="center">
              <GraphComponent colors={this.wind_colors} yAxisLabel={"m/s"} data={this.state.data} xDataKey={"sol"} yDataKeyAvg={"wind_avg"} yDataKeyMax={"wind_max"} yDataKeyMin={"wind_min"} />
            </Stack.Item>
          </Stack>
          <Stack>
            <Stack.Item align="center">
              <Text variant="xLarge">Pressure</Text>
            </Stack.Item>
            <Stack.Item align="center">
              <GraphComponent colors={this.pressure_colors} yAxisLabel={"Pa"} data={this.state.data} xDataKey={"sol"} yDataKeyAvg={"pressure_avg"} yDataKeyMax={"pressure_max"} yDataKeyMin={"pressure_min"} />
            </Stack.Item>
          </Stack>
          <Stack.Item align="center">
            <Footer />
          </Stack.Item>
        </Stack>
      </div>
    );
  }
}

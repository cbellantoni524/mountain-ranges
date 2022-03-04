import React from 'react';
import {Range} from './Range';
import {rangesApi} from '../rest/RangesAPI.js';

export class RangesList extends React.Component {
    state = {
        ranges: []
    };

    componentDidMount() {
        this.fetchRanges();
    };

    fetchRanges = async () => {
        const ranges = await rangesApi.get();
        this.setState({ranges});
    };

    updateRange = async (updateRange) => {
        await rangesApi.put(updateRange);
        this.fetchRanges();
    };

    render() {
        return (
            <div className='range-list'>
                {this.state.ranges.map((range) => (
                    <Range 
                        range = {range}
                        key= {range._id}
                        updateRange={this.updateRange}
                        />
                ))}
            </div>
        )
    }
}
import React, { Component } from 'react';
import { NoticeBar, PullToRefresh, Icon, Toast, ListView } from 'antd-mobile'
import EchoList from '../../components/EchoList'
function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}
class Echo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight - 80,
      data: [],
      loading: true,
      hasMore: true
    }
  }
  componentDidMount() {
    // const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      data: genData(),
    }), 0);
  }
  loadMore() {
    if (this.state.hasMore) {
      // this.getMovieList()
      console.log('获取更多')
    }
  }
  render() {
    const { data, loading } = this.state
    return (<div>
      <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
        Notice: 你大爷发布了一条消息，大家都在讨论，快去围观
    </NoticeBar>
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.down ? 'down' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          setTimeout(() => {
            this.setState({ refreshing: false });
          }, 1000);
        }}
      >
        {/* {this.state.data.map(i => (
          <div key={i} style={{ textAlign: 'center', padding: 20 }}>
            {this.state.down ? 'pull down' : 'pull up'} {i}
          </div>
        ))} */}
        <EchoList data={data} loading={loading} loadMore={this.loadMore}></EchoList>
      </PullToRefresh>
    </div>)
  }
}
export default Echo;
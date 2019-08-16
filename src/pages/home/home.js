import React from 'react'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import { List, Avatar, Button, Affix, Spin } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import InfiniteScroll from 'react-infinite-scroller'
import '../../style/home.scss'
// import { thisTypeAnnotation } from '@babel/types'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{}, {}, {}],
      pageNum: 0,
      pageSize: 20,
      loading: true,
      hasMore: true
    }
  }
  gotoDetail(data) {
    console.log(data)
    window.location.href = data
  }
  cloneBtUrl(url) {}
  renderBtn(type, url) {
    if (type === 'blank') {
      return (
        <CopyToClipboard
          text={url}
          onCopy={() => {
            console.log(9)
          }}
        >
          <Button
            type="primary"
            className="tool-button"
            onClick={this.gotoDetail.bind(this, url)}
          >
            点击查看详情
          </Button>
        </CopyToClipboard>
      )
    } else {
      return (
        <CopyToClipboard text={url} onCopy={() => {}}>
          <Button
            type="primary"
            className="tool-button"
            onClick={this.cloneBtUrl.bind(this, url)}
          >
            点击复制下载链接
          </Button>
        </CopyToClipboard>
      )
    }
  }
  movieLoad() {
    console.log('90')
    if (this.state.hasMore) {
      this.getMovieList()
    }
  }
  render() {
    const { data, hasMore, loading } = this.state
    return (
      <div className="home">
        <Affix>
          <h2>聚合电影</h2>
        </Affix>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.movieLoad.bind(this)}
          hasMore={hasMore}
          initialLoad={false}
          threshold={80}
          loader={<div className="loader" key={0} />}
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                {/* <List.Item.Meta
                avatar={<Avatar className="avatar" src={item.postUrl} />}
                title={
                  <a href="http://tfboy.gearhostpreview.com">{item.title}</a>
                }
                description={item.btUrl}
              /> */}
                {this.renderBtn(item.type, item.btUrl)}

                <LazyLoad>
                  <List.Item.Meta
                    avatar={<Avatar className="avatar" src={item.postUrl} />}
                    title={<a href="http://imov.herokuapp.com">{item.title}</a>}
                    description={item.btUrl}
                  />
                </LazyLoad>
              </List.Item>
            )}
          />
          <div className="loader">
            <Spin spinning={loading} />
          </div>
        </InfiniteScroll>
      </div>
    )
  }
  componentDidMount() {
    this.getMovieList()
  }
  getMovieList() {
    let that = this
    let { pageNum, pageSize } = this.state
    that.setState(
      {
        loading: true,
        hasMore: false
      },
      () => {
        axios
          .get(`${this.props.host}/get_movies?page=${pageNum}&size=${pageSize}`)
          .then(function(response) {
            console.log(response)
            let list = response.data.data
            if (pageNum === 0) {
              if (list) {
                that.setState({
                  data: list
                })
              }
            } else {
              if (list) {
                that.setState({
                  data: that.state.data.concat(list)
                })
              }
            }
            if (list.length < pageSize) {
              that.setState({
                hasMore: false
              })
            }
            that.setState({
              loading: false,
              pageNum: pageNum + 1,
              hasMore: true
            })
          })
          .catch(function(error) {
            console.log(error)
          })
          .finally(function() {})
      }
    )
  }
}

export default Home

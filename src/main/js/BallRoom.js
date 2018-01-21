var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import BallRoom1 from './BallRoom1';

export default class BallRoom extends React.Component {
 renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>จองห้องจัดเลี้ยง</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  popPage() {
    this.props.navigator.popPage();
  }

  BallRoom1() {
    this.props.navigator.pushPage({ component: BallRoom1, props: { key: 'ballRoom1' } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <div style={{ textAlign: 'center' }}>
           <h1>บริการจองห้องจัดเลี้ยง</h1>
        </div>
        <img src={"https://www.picz.in.th/images/2018/01/21/99859ek9e5hbdfa78k6bj.jpg"} style={{width: '100%'}}  />
        <Ons.ListTitle>เลือกห้องจัดเลี้ยง</Ons.ListTitle>
          <Ons.List>
          <br/>

            <div style={{ textAlign: 'center' }}>
               ROOM1
            </div>

          <Ons.ListItem>
            <div style={{ textAlign: 'center' }}>
              <img src={"https://www.img.in.th/images/8d174cb6b29a6b703685804b157952e8.jpg"} style={{width: '50%'}}  /><br/>
              <br/>
              <Ons.Button onClick={this.BallRoom1.bind(this, BallRoom1)}>รายละเอียดห้อง </Ons.Button><br/><br/>

            </div>
          </Ons.ListItem>

        </Ons.List>


        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Thank. You!
        </p>
      </Ons.Page>
    );
  }
}

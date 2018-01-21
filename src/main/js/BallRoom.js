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
      <Ons.Toolbar>
        <div className='center'>โรงแรงTeam15</div>
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

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <Ons.Card>
        <div style={{ textAlign: 'center' }}>

           <h1>บริการจองห้องจัดเลี้ยง</h1>

            <img src={"https://www.picz.in.th/images/2018/01/21/Gif-.gif"} style={{width: '100%'}}  />
             </div>
        </Ons.Card>

           <Ons.ListTitle>เลือกห้องจัดเลี้ยง</Ons.ListTitle
           >
           <Ons.Card>

                <div style={{ textAlign: 'center' }}>
                  ROOM1
               </div>

                 <div style={{ textAlign: 'center' }}>
               <img src={"https://www.img.in.th/images/8d174cb6b29a6b703685804b157952e8.jpg"} style={{width: '20%'}}  /><br/>
              <br/>
              <Ons.Button onClick={this.BallRoom1.bind(this, BallRoom1)}>รายละเอียดห้อง </Ons.Button><br/><br/>

               </div>
           </Ons.Card>


        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Thank. You!
        </p>
      </Ons.Page>
    );
  }
}

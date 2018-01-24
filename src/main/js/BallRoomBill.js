
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

export default class BallRoomBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		  color:'#FFEBCD',
		  position: '45%'

    };
  }

 renderToolbar() {
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

       <Ons.Card style={{paddingLeft:'15%' }}>

           <Ons.ListTitle>ตรวจสอบข้อมูล</Ons.ListTitle>

           <Ons.Card style={{paddingTop: '20px',width: '85%',backgroundColor: this.state.color}}>
           <Ons.BackButton><Ons.Button>แก้ไขข้อมูล</Ons.Button></Ons.BackButton>

                <div style={{ textAlign: 'center'}}>
                  ข้อมูลส่วนตัว
                </div><br/>

                <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                ชื่อ: &ensp;
                <input type="text" style={{ color: 'red' }} value={this.props.state.fname} />
              </div>
              <br/><br/>

               <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
              นามสกุล: &ensp;
                <input type="text" style={{ color: 'red' }} value={this.props.state.lname} />
              </div>
              <br/><br/>

               <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
               หน่วยงาน/บริษัท: &ensp;
                <input type="text" style={{ color: 'red' }} value={this.props.state.company} />
              </div>
              <br/><br/>

               <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
               ที่อยู่: &ensp;
                <input type="text" style={{ color: 'red' }} value={this.props.state.address} />
              </div>
              <br/><br/>

               <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
               email : &ensp;
                <input type="text" style={{ color: 'red' }} value={this.props.state.email} />
              </div>
              <br/><br/>

               <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
               Tel : &ensp;
                <input type="text" style={{ color: 'red' }} value={this.props.state.tel} />
              </div>
              <br/><br/>


               <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
               Phone : &ensp;
                <input type="text" style={{ color: 'red' }} value={this.props.state.phone} />
              </div>
              <br/><br/>
           </Ons.Card>


           <Ons.Card style={{paddingTop: '20px',width: '85%',backgroundColor: this.state.color}}>
                <div style={{ textAlign: 'center' }}>
                  รายละเอียดงาน
                </div><br/>
                <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
                ชื่องาน: &ensp;
                <input type="text" style={{ color: 'red' }} value={this.props.state.job} />
              </div>
              <br/><br/>

               <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
               จำนวนผู้ร่วมงาน: &ensp;
                <input type="text" style={{ color: 'red' }} value={this.props.state.amount} />
              </div>
              <br/><br/>

               <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
               วันเริ่มจัดงาน: &ensp;
                <input type="text" style={{ color: 'red' }} value={this.props.state.startDate} />
              </div>
              <br/><br/>

               <div style={{ textAlign: 'right',paddingRight:this.state.position }}>
               วันสิ้นสุดการจัดงาน: &ensp;
               <input type="text" style={{ color: 'red' }} value={this.props.state.endDate} />
              </div>
              <br/><br/>

              <p style={{ textAlign: 'center'}}>
                   <Ons.Button>ยืนยันข้อมูล</Ons.Button>
              </p>

           </Ons.Card>



        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Thank. You!
        </p>

        </Ons.Card>
      </Ons.Page>
    );
  }
}

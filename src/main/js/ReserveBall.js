
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import BallRoomBill from './BallRoomBill';
let imgUrl = 'https://www.picz.in.th/images/2018/01/24/Sea_Beach_Background.jpg';
export default class ReserveBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      other: [
        'food',
        'Music',
        'Room'
        ],
        selecte: 'food',

      fname:'',
		  lname:'',
		  company:'',
		  address:'',
		  email:'',
		  tel:'',
		  phone:'',
		  job:'',
		  amount:'',
		  startDate:'',
		  endDate:'',
		  color:'#EEE8AA',
      position:'36%'

    };
  }



  renderToolbar() {

    return (
      <Ons.Toolbar>
      <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
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

  PageBill() {
      if( ((this.state.fname)!=='') && ((this.state.lname)!=='')&& ((this.state.company)!=='')
      && ((this.state.address)!=='') && ((this.state.email)!=='') && ((this.state.tel)!=='')
      && ((this.state.phone)!=='') && ((this.state.job)!=='') && ((this.state.amount)!=='')
      && ((this.state.startDate)!=='')&& ((this.state.endDate)!=='')){
        this.props.navigator.pushPage({ component: BallRoomBill, props: { key: 'ballRoomBill',state: this.state}});
      }else{
          ons.notification.alert('กรุณากรอกข้อมูลให้ครบ');
      }
  }


  handleFirstName(e) {
    this.setState({fname: e.target.value});
  }

  handleLastName(e) {
    this.setState({lname: e.target.value});
  }

  handleCompany(e) {
    this.setState({company: e.target.value});
  }

  handleAddress(e) {
    this.setState({address: e.target.value});
  }

  handleEmail(e) {
    this.setState({email: e.target.value});
  }

  handleTel(e) {
    this.setState({tel: e.target.value});
  }

  handlePhone(e) {
    this.setState({phone: e.target.value});
  }

  handleJob(e) {
    this.setState({job: e.target.value});
  }

  handleAmount(e) {
    this.setState({amount: e.target.value});
  }

  handleStartDate(e) {
    this.setState({startDate: e.target.value});
  }

  handleEndDate(e) {
    this.setState({endDate: e.target.value});
  }
  handleCheckBox(other) {
    this.setState({selecte: other});
  }


  renderCheckBox(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
          />
        </label>
        <label htmlFor={`checkbox-${row}`} className='center'>
          {row}
        </label>
      </Ons.ListItem>
    )
  }


  render() {


    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)} >

       <Ons.Card style={{paddingLeft:'15%',backgroundImage: 'url(' + imgUrl + ')' }}>

          <Ons.Card  style={{backgroundColor: this.state.color, width: '85%'}}>


      <h3 style={{paddingLeft: this.state.position }}>*ข้อมูลการติดต่อ</h3>
        <form >
           <div style={{paddingLeft:this.state.position }}>
                <label>ชื่อ:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;
                <label>นามสกุล:</label>
              <div>
               <input type="text" value={this.state.fname} onChange={this.handleFirstName.bind(this)}/>
                &ensp;&ensp;&ensp;
               <input type="text" value={this.state.lname} onChange={this.handleLastName.bind(this)}/>
              </div>
           </div>
           <br/>
           <div style={{paddingLeft:this.state.position }}>
                <label>หน่วยงาน/บริษัท:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;
              <div>
               <input type="text"  size="48" value={this.state.company} onChange={this.handleCompany.bind(this)}/>
              </div>
           </div>
           <br/>
           <div style={{paddingLeft:this.state.position }}>
                <label>ที่อยู่:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;
              <div>
               <textarea type="text"  size="100" value={this.state.address} onChange={this.handleAddress.bind(this)}/>
              </div>
           </div>
           <br/>
           <div style={{paddingLeft:this.state.position }}>
                <label>อีเมลล์ของคุณ:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;
              <div>
               <input type="text"  size="48" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
              </div>
           </div>
            <br/>
           <div style={{paddingLeft:this.state.position }}>
                <label>โทรศัพท์:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                <label>มือถือ:</label>
              <div>
               <input type="text" value={this.state.tel} onChange={this.handleTel.bind(this)}/>
                &ensp;&ensp;&ensp;
               <input type="text" value={this.state.phone} onChange={this.handlePhone.bind(this)}/>
              </div>
           </div>
           <br/>


        </form>
          </Ons.Card>


           <Ons.Card  style={{backgroundColor: this.state.color, width: '85%'}}>
          <h3 style={{paddingLeft:this.state.position }}>*รายละเอียดของงาน</h3>
        <form >
           <div style={{paddingLeft:this.state.position }}>
              <label>ชื่องาน:</label>
               <div>
                <input type="text" size="48" value={this.state.job} onChange={this.handleJob.bind(this)}/>
               </div>
           </div>
           <br/>
           <div style={{paddingLeft:this.state.position }}>
              <label>จำนวนผู้เข้าร่วมงาน:</label>
               <div>
                <input type="number" size="10" value={this.state.amount} onChange={this.handleAmount.bind(this)}/>
               </div>
           </div>
           <br/>
           <div style={{paddingLeft:this.state.position }}>
                <label>วันเริ่มการจัดงาน:</label> &ensp;&ensp;&ensp;
                &ensp;&ensp;
                <label>วันสิ้นสุดการจัดงาน:</label>
              <div>
               <input type="date"  value={this.state.startDate} onChange={this.handleStartDate.bind(this)}/>
                &ensp;&ensp;&ensp;
               <input type="date"  value={this.state.endDate} onChange={this.handleEndDate.bind(this)}/>
              </div><br/>



                <Ons.Checkbox value={this.state.a} /> One &ensp;&ensp;&ensp;&ensp;&ensp;
                <Ons.Checkbox value={this.state.b}/> Two &ensp;&ensp;&ensp;&ensp;&ensp;
                <Ons.Checkbox value={this.state.c}/> Three &ensp;&ensp;&ensp;&ensp;&ensp;



           </div>
           <br/>

           <p style={{paddingLeft:this.state.position }}>

              <Ons.Button onClick={this.PageBill.bind(this, BallRoomBill)}>บันทึกข้อมูล </Ons.Button><br/>
           </p>

        </form>

          </Ons.Card>
      </Ons.Card>

      </Ons.Page>
    );
  }
}

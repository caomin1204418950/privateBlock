import React, { Component } from 'react';
import Tabar from '../tabar/Tabar'
import {Input,Button,Modal} from 'antd'
import './WNotes.css'
import 'antd/dist/antd.css';


class WNotes extends Component{
    state={
        topic:"",
        title:"",
        textContent:"",
        visible:false
    }
    getContentValue(){

        // console.log(this.refs.textContent.value)
        var content=this.refs.textContent.value
        this.setState({
            textContent:content
        })
        // console.log(this.state.textContent)
    }
    getTopic(){
        // console.log(this.refs.topic.input.value)
        var topic =this.refs.topic.input.value
        this.setState({
            topic:topic
        })
    }
    getTitle(){
        // console.log(this.refs.title.input.value)
        var title=this.refs.title.input.value
        this.setState({
            title:title
        })
    }
    submit(){
        console.log(this.state.topic)
        console.log(this.state.title)
        console.log(this.state.textContent) 
        if(this.state.topic&&this.state.title&&this.state.textContent){
            this.setState({
                visible:true
            }) 
        }else{
            alert("请完善笔记！")
        }
              
        
    }
    handleCancel(){
        console.log("cancel")
        this.setState({
            visible:false
        })
    }
    handleOk(){
        console.log("ok")
        this.setState({
            visible:false
        })
    }
    render () {
        return (
            <div className="WNotes">
                <div className="topic">
                    <Input placeholder="标签" ref="topic" onChange={this.getTopic.bind(this)}></Input>
                </div>
                <div className="title" >
                    <Input placeholder="标题"ref="title" onChange={this.getTitle.bind(this)}/>
                </div>
                <div className="content">
                    <textarea maxLength='' ref="textContent" className="textContent" placeholder="写下我的日记" onChange={()=>this.getContentValue()}></textarea>
                </div>
                <Button type="submit" onClick={this.submit.bind(this)}>发表</Button>
                <Modal visible={this.state.visible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)} cancelText="否"okText="是">
                    确认发表吗？
                </Modal>
                <Tabar/>
            </div>
        )
    }
}
export default WNotes;
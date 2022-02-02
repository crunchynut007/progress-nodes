import './Layout.css';
import React from "react";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevDisabled: true,
            nextDisabled: false,
            currentActive: 1,
            progress: '0%',
            circleBorder: ['active', '', '', ''],
        }
        this.addActive = this.addActive.bind(this)
        this.removeActive = this.removeActive.bind(this)
        this.updateCircleBorders = this.updateCircleBorders.bind(this)
        this.updateProgressBar = this.updateProgressBar.bind(this)
        this.checkButtonDisabled = this.checkButtonDisabled.bind(this)
        this.getCircles = this.getCircles.bind(this)
    }

    getCircles() {
        return (document.querySelectorAll('.circle'))
    }

    addActive() {
        let c = this.getCircles()
        let t = this.state.currentActive;
        t = t + 1;
        if (t > c.length) {
            t = c.length;
        }
        console.log(t)
        this.setState({currentActive: t});
        this.updateCircleBorders(t)
        this.updateProgressBar(t)
        this.checkButtonDisabled(t)
    }

    removeActive() {
        let t = this.state.currentActive;
        t = t - 1;
        if (t < 1) {
            t = 1;
        }
        console.log(t)
        this.setState({currentActive: t});
        this.updateCircleBorders(t)
        this.updateProgressBar(t)
        this.checkButtonDisabled(t)
    }

    updateCircleBorders(t) {
        let c = this.getCircles()
        // Update active className on each circle element
        c.forEach((circle, index) => {
            let circlesState = this.state.circleBorder;
            if (index < t) {
                circlesState[index] = 'active'
            } else {
                circlesState[index] = ''
            }
            this.setState({circleBorder: circlesState})
        })
    }

    updateProgressBar(t) {
        let c = this.getCircles()
        let progressBarWidth = ((t - 1) / (c.length - 1) * 100) + '%'
        this.setState({progress: progressBarWidth})
    }

    checkButtonDisabled(t) {
        let c = this.getCircles()
        if (t === 1) {
            this.setState({prevDisabled: true, nextDisabled: false})
        } else if (t === c.length) {
            this.setState({prevDisabled: false, nextDisabled: true})
        } else {
            this.setState({prevDisabled: false, nextDisabled: false})
        }
    }

    render() {
        return (
            <div className="container">
                <div className="progress-container">
                    <div className="progress" style={{width: this.state.progress}}/>
                    <div className={"circle " + this.state.circleBorder[0]}>
                        <label>1</label>
                    </div>
                    <div className={"circle " + this.state.circleBorder[1]}>
                        <label>2</label>
                    </div>
                    <div className={"circle " + this.state.circleBorder[2]}>
                        <label>3</label>
                    </div>
                    <div className={"circle " + this.state.circleBorder[3]}>
                        <label>4</label>
                    </div>
                </div>

                <button className="btn" id='prev' onClick={this.removeActive} disabled={this.state.prevDisabled}>Prev
                </button>
                <button className="btn" id="next" onClick={this.addActive} disabled={this.state.nextDisabled}>Next
                </button>
            </div>
        );
    }
}

export default Layout
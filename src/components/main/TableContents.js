import React, { Component }  from "react"
import PropTypes from "prop-types"
import throttle from "../common/throttle"
import "./TableContents.scss"


class TableContents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: this.props.step
    };

    this.node = {
      asideRef: React.createRef(),
      asideNodes : null,
      article: null,
      headings: null,
      header: null
    };

    this.info = {
      intervals: [],
      scrollTops: [],
      currTop: 0,
      prevTop: 0,
      revision: 100,
      step: 0,
    };

    this.getTableContents = this.getTableContents.bind(this);
    this.setIntervals = this.setIntervals.bind(this);
    this.setCurrentScrollState = this.setCurrentScrollState.bind(this)
    this.setComponentNode = this.setComponentNode.bind(this);

    this.setTableContentsPos = this.setTableContentsPos.bind(this);
    this.handleHighlight = this.handleHighlight.bind(this);

    this.bindScrollEvents = this.bindScrollEvents.bind(this);
    this.scrollThrottle = throttle(this.bindScrollEvents, 100);

    this.triggerScrollTo = this.triggerScrollTo.bind(this);
    this.setScrollTo = this.setScrollTo.bind(this);
    this.lockRelatedComponet = this.lockRelatedComponet.bind(this);
    this.releaseRelatedComponet = this.releaseRelatedComponet.bind(this);
  }

  releaseRelatedComponet() {
    this.node.asideRef.current.classList.remove('lock')
    this.node.header.classList.remove('lock');
  }

  lockRelatedComponet() {
    const blockName = 'main-header';
    const classNames = [ '--fade-in', '--fade-out', '--docking' ]
      .map(className => blockName + className);

    this.node.header.classList.remove(...classNames);
    this.node.header.classList.add(`${blockName}--fade-out`, `lock`);
    this.node.asideRef.current.classList.add('lock');
  }

  triggerScrollTo(event, idx) {
    if (!this.node.asideRef.current.classList.contains('lock')) {
      this.lockRelatedComponet();
      this.setScrollTo(event, idx);
    }
  }

  setScrollTo(event, idx) {
    const contentsTop = document.getElementsByClassName('post__contents')[0].offsetTop;
    const headingTop = Math.round(this.node.headings[idx].offsetTop);
    const targetTop = contentsTop + headingTop;
    const currentTop = this.info.currTop;
    const distance = Math.round(currentTop - targetTop) / 2;
    const duration = 1000;
    let currentPhase = 0;
    let timestampOld = performance.now();

    window.requestAnimationFrame(scrolling.bind(this));

    function scrolling() {
      const timestampNew = performance.now();
      const tsDiff = Math.round(timestampNew - timestampOld);
      timestampOld = timestampNew;

      currentPhase += Math.PI / (duration / tsDiff);
      if (currentPhase >= Math.PI) {
        this.releaseRelatedComponet();
        this.info.step = idx;
        this.setState({ step: this.info.step });
        return;
      }

      window.scrollTo(0, distance * Math.cos(currentPhase) + distance + targetTop);
      window.requestAnimationFrame(scrolling.bind(this));
    }
  }

  handleHighlight() {
    const { intervals, prevTop, currTop, revision, step } = this.info;
    const isTopdown = prevTop <= currTop ? true : false;
    let currStep = step;

    for (let i = currStep; i < intervals.length; i++) {
      if (intervals[i] <= currTop) {
        currStep = i;
      }
    }

    /*
    const dir = isTopdown ? revision : (revision * -1);
    const sightTop = currTop + dir;
    const fExpression = i => isTopdown ? ++i : --i;
    const fCondition = i => isTopdown ? i < intervals.length - 1 : 0 < i;

    for (let i = step; fCondition(i); i = fExpression(i)) {
      const prev = intervals[i], next = intervals[i + 1];
      const first = intervals[0], last = intervals[intervals.length - 1];

      if (sightTop < first) {
        this.info.step = 0;
        break;
      }

      else if (first <= sightTop && sightTop < prev) {
        // 논리 오류있는 부분 수정할 것
        // this.info.step = i - 1;
        // break;
      }

      else if (first <= sightTop && (prev < sightTop && sightTop < next)) {
        this.info.step = i;
        break;
      }

      else if (first <= sightTop && last < sightTop) {
        this.info.step = intervals.length - 1;
        break;
      }
    }
    */

    if (this.state.step !== currStep) {
      this.setState({ step: currStep });
    }
  }

  bindScrollEvents() {
    this.setCurrentScrollState();
    this.handleHighlight();
  }

  setCurrentScrollState() {
    const scrollTop = document.documentElement.scrollTop || document.scrollingElement.scrollTop
    this.info.scrollTops.push(Math.round(scrollTop));
    if (this.info.scrollTops.length > 1) {
      this.info.prevTop = this.info.scrollTops.shift();
    }

    this.info.currTop = this.info.scrollTops[0];
  }

  // === 집에가서 수정할 부분 ===
  setTableContentsPos() {
    const doc = document.body;
    const article = this.node.article;
    const docAutoMarginVal = doc.offsetWidth - article.offsetWidth;
    // const tableContentsPos = article.offsetWidth + (docAutoMarginVal / 2);
    const tableContentsPos = article.offsetWidth;

    this.node.asideRef.current.style.transform = `translateX(${ tableContentsPos }px)`;
  }
  // ==============================

  setIntervals() {
    const contents = document.getElementsByClassName('post__contents')[0];
    this.info.intervals = [].slice.apply(this.node.headings).map((heading) => {
      return heading.offsetTop + contents.offsetTop;
    });
  }

  getTableContents() {
    const children = [].slice.apply(this.node.contents.getElementsByClassName('markdown')[0].children);
    let array = [];

    children.forEach(node => {
      if (/^H[1-6]$/.test(node.tagName)) array.push(node);
    });

    return array;
  }

  setComponentNode() {
    const app = document.getElementById('___gatsby');
    const aside = this.node.asideRef.current;

    this.node.article = aside.parentNode;
    this.node.asideNodes = [].slice.apply(aside.getElementsByTagName('li'));
    this.node.header = app.getElementsByClassName('main-header')[0];
    this.node.contents = app.getElementsByClassName('post__contents')[0];
    this.node.headings = this.getTableContents();
  }

  componentDidMount() {
    this.setComponentNode();
    this.setIntervals();
    this.setTableContentsPos();

    window.addEventListener('scroll', this.scrollThrottle, { passive: true });
    window.addEventListener('resize', this.setTableContentsPos, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollThrottle);
    window.removeEventListener('resize', this.setTableContentsPos);
  }

  render() {
    const { step } = this.state;
    const { name, headings } = this.props;
    return (
      <div className="toc" ref={this.node.asideRef}>
        <p className="toc__title">{name}</p>
        <ul className="toc__list">
          <ListItem headings={headings} step={step} scrollTo={this.triggerScrollTo} />
        </ul>
      </div>
    );
  }
}

const ListItem = (props) => {
  const { headings, step, scrollTo } = props;
  return headings.map((head, idx) => {
    const classnames = [
      `toc__item`, `h${head.depth}`, `${idx === step ? 'on' : ''}`
    ];

    return (
      <li
        key={`toc-${idx}`}
        className={classnames.join(' ')}
        onClick={event => scrollTo(event, idx)}
      >
        {head.value}
      </li>
    );
  })
};

TableContents.defaultProps = {
  step: 0,
  name: '목차'
};

TableContents.propTypes = {
  step: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default TableContents;

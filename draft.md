`.col-xs-$	Extra Small	Phones Less than 768px` - @media (max-width: 767px)

`.col-sm-$	Small Devices	Tablets 768px and Up` - @media (max-width: 991px)

`.col-md-$	Medium Devices	Desktops 992px and Up` - @media (max-width: 1199px)

`.col-lg-$	Large Devices	Large Desktops 1200px and Up`

**display the average FPS:**
`+UI.panels.timeline._flameChart._model._frameModel._frames.slice(1).map(f => 1000 / f.duration).reduce((avg, fps, i) => (avg*i + fps) / (i+1), 0).toFixed(1)`

`react-transition-group` - https://reactcommunity.org/react-transition-group/
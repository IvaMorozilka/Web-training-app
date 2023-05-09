import React from "react"
import {Fragment} from "react"
import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox"
import AbstractModalHeader from "react-bootstrap/cjs/AbstractModalHeader";
import {
    Accordion,
    AccordionContext,
    Alert,
    Anchor,
    Breadcrumb,
    Card,
    CardGroup,
    Carousel,
    Dropdown,
    Figure,
    FormCheck,
    FormControl,
    FormFloating,
    InputGroup,
    ListGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalTitle,
    Nav,
    Navbar,
    NavDropdown,
    NavItem,
    Offcanvas,
    OffcanvasBody,
    OffcanvasTitle,
    Pagination,
    Placeholder,
    Popover, PopoverBody, PopoverHeader, SSRProvider, Tab, TabContent, Toast, ToastBody, ToggleButtonGroup
} from "react-bootstrap/cjs";
import AccordionBody from "react-bootstrap/cjs/AccordionBody";
import AccordionButton from "react-bootstrap/cjs/AccordionButton";
import AccordionCollapse from "react-bootstrap/cjs/AccordionCollapse";
import AccordionHeader from "react-bootstrap/cjs/AccordionHeader";
import AccordionItem from "react-bootstrap/cjs/AccordionItem";
import Badge from "react-bootstrap/cjs/Badge";
import BreadcrumbItem from "react-bootstrap/cjs/BreadcrumbItem";
import {BsPrefixComponent} from "react-bootstrap/cjs/helpers";
import Button from "react-bootstrap/cjs/Button";
import ButtonGroup from "react-bootstrap/cjs/ButtonGroup";
import ButtonToolbar from "react-bootstrap/cjs/ButtonToolbar";
import CardHeader from "react-bootstrap/cjs/CardHeader";
import CardImg from "react-bootstrap/cjs/CardImg";
import CarouselItem from "react-bootstrap/cjs/CarouselItem";
import CloseButton from "react-bootstrap/cjs/CloseButton";
import Col from "react-bootstrap/cjs/Col";
import Collapse from "react-bootstrap/cjs/Collapse";
import Container from "react-bootstrap/cjs/Container";
import ThemeProvider, {
    DEFAULT_BREAKPOINTS,
    DEFAULT_MIN_BREAKPOINT,
    ThemeConsumer
} from "react-bootstrap/cjs/ThemeProvider";
import DropdownButton from "react-bootstrap/cjs/DropdownButton";
import DropdownContext from "react-bootstrap/cjs/DropdownContext";
import DropdownItem from "react-bootstrap/cjs/DropdownItem";
import DropdownMenu from "react-bootstrap/cjs/DropdownMenu";
import DropdownToggle from "react-bootstrap/cjs/DropdownToggle";
import PageItem, {Ellipsis, First, Last, Next, Prev} from "react-bootstrap/cjs/PageItem";
import Fade from "react-bootstrap/cjs/Fade";
import Feedback from "react-bootstrap/cjs/Feedback";
import FigureCaption from "react-bootstrap/cjs/FigureCaption";
import FigureImage from "react-bootstrap/cjs/FigureImage";
import FloatingLabel from "react-bootstrap/cjs/FloatingLabel";
import FormCheckInput from "react-bootstrap/cjs/FormCheckInput";
import FormCheckLabel from "react-bootstrap/cjs/FormCheckLabel";
import FormContext from "react-bootstrap/cjs/FormContext";
import FormGroup from "react-bootstrap/cjs/FormGroup";
import FormLabel from "react-bootstrap/cjs/FormLabel";
import FormRange from "react-bootstrap/cjs/FormRange";
import FormSelect from "react-bootstrap/cjs/FormSelect";
import FormText from "react-bootstrap/cjs/FormText";
import Image from "react-bootstrap/cjs/Image";
import ListGroupItem from "react-bootstrap/cjs/ListGroupItem";
import ModalContext from "react-bootstrap/cjs/ModalContext";
import ModalDialog from "react-bootstrap/cjs/ModalDialog";
import ModalHeader from "react-bootstrap/cjs/ModalHeader";
import NavContext from "react-bootstrap/cjs/NavContext";
import NavLink from "react-bootstrap/cjs/NavLink";
import NavbarBrand from "react-bootstrap/cjs/NavbarBrand";
import NavbarCollapse from "react-bootstrap/cjs/NavbarCollapse";
import NavbarOffcanvas from "react-bootstrap/cjs/NavbarOffcanvas";
import NavbarToggle from "react-bootstrap/cjs/NavbarToggle";
import OffcanvasHeader from "react-bootstrap/cjs/OffcanvasHeader";
import OffcanvasToggling from "react-bootstrap/cjs/OffcanvasToggling";
import Overlay from "react-bootstrap/cjs/Overlay";
import OverlayTrigger from "react-bootstrap/cjs/OverlayTrigger";
import PlaceholderButton from "react-bootstrap/cjs/PlaceholderButton";
import ProgressBar from "react-bootstrap/cjs/ProgressBar";
import Ratio from "react-bootstrap/cjs/Ratio";
import Row from "react-bootstrap/cjs/Row";
import Spinner from "react-bootstrap/cjs/Spinner";
import SplitButton from "react-bootstrap/cjs/SplitButton";
import Stack from "react-bootstrap/cjs/Stack";
import TabContainer from "react-bootstrap/cjs/TabContainer";
import TabPane from "react-bootstrap/cjs/TabPane";
import Table from "react-bootstrap/cjs/Table";
import Tabs from "react-bootstrap/cjs/Tabs";
import ToastContainer from "react-bootstrap/cjs/ToastContainer";
import ToastContext from "react-bootstrap/cjs/ToastContext";
import ToastFade from "react-bootstrap/cjs/ToastFade";
import ToastHeader from "react-bootstrap/cjs/ToastHeader";
import ToggleButton from "react-bootstrap/cjs/ToggleButton";
import Tooltip from "react-bootstrap/cjs/Tooltip";
import TransitionWrapper from "react-bootstrap/cjs/TransitionWrapper";
import _default from "react-bootstrap/cjs/Accordion";

export const PaletteTree = () => (
    <Palette>
        <Category name="App">
            <Component name="Loader">
                <Variant>
                    <ExampleLoaderComponent/>
                </Variant>
            </Component>
        </Category>
        <Category name="BootStrap">
            <Component name="AbstractModalHeader">
                <Variant>
                    <AbstractModalHeader/>
                </Variant>
            </Component>
            <Component name="Accordion">
                <Variant>
                    <Accordion/>
                </Variant>
            </Component>
            <Component name="AccordionBody">
                <Variant>
                    <AccordionBody/>
                </Variant>
            </Component>
            <Component name="AccordionButton">
                <Variant>
                    <AccordionButton/>
                </Variant>
            </Component>
            <Component name="AccordionCollapse">
                <Variant>
                    <AccordionCollapse/>
                </Variant>
            </Component>
            <Component name="AccordionContext">
                <Variant>
                    <AccordionContext/>
                </Variant>
            </Component>
            <Component name="AccordionHeader">
                <Variant>
                    <AccordionHeader/>
                </Variant>
            </Component>
            <Component name="AccordionItem">
                <Variant>
                    <AccordionItem/>
                </Variant>
            </Component>
            <Component name="Alert">
                <Variant>
                    <Alert/>
                </Variant>
            </Component>
            <Component name="Anchor">
                <Variant>
                    <Anchor/>
                </Variant>
            </Component>
            <Component name="Badge">
                <Variant>
                    <Badge/>
                </Variant>
            </Component>
            <Component name="Breadcrumb">
                <Variant>
                    <Breadcrumb/>
                </Variant>
            </Component>
            <Component name="BreadcrumbItem">
                <Variant>
                    <BreadcrumbItem/>
                </Variant>
            </Component>
            <Component name="BsPrefixComponent">
                <Variant>
                    <BsPrefixComponent/>
                </Variant>
            </Component>
            <Component name="Button">
                <Variant>
                    <Button/>
                </Variant>
            </Component>
            <Component name="ButtonGroup">
                <Variant>
                    <ButtonGroup/>
                </Variant>
            </Component>
            <Component name="ButtonToolbar">
                <Variant>
                    <ButtonToolbar/>
                </Variant>
            </Component>
            <Component name="Card">
                <Variant>
                    <Card/>
                </Variant>
            </Component>
            <Component name="CardGroup">
                <Variant>
                    <CardGroup/>
                </Variant>
            </Component>
            <Component name="CardHeader">
                <Variant>
                    <CardHeader/>
                </Variant>
            </Component>
            <Component name="CardImg">
                <Variant>
                    <CardImg/>
                </Variant>
            </Component>
            <Component name="Carousel">
                <Variant>
                    <Carousel/>
                </Variant>
            </Component>
            <Component name="CarouselItem">
                <Variant>
                    <CarouselItem/>
                </Variant>
            </Component>
            <Component name="CloseButton">
                <Variant>
                    <CloseButton/>
                </Variant>
            </Component>
            <Component name="Col">
                <Variant>
                    <Col/>
                </Variant>
            </Component>
            <Component name="Collapse">
                <Variant>
                    <Collapse/>
                </Variant>
            </Component>
            <Component name="Container">
                <Variant>
                    <Container/>
                </Variant>
            </Component>
            <Component name="DEFAULT_BREAKPOINTS">
                <Variant>
                    <DEFAULT_BREAKPOINTS/>
                </Variant>
            </Component>
            <Component name="DEFAULT_MIN_BREAKPOINT">
                <Variant>
                    <DEFAULT_MIN_BREAKPOINT/>
                </Variant>
            </Component>
            <Component name="ThemeConsumer">
                <Variant>
                    <ThemeConsumer/>
                </Variant>
            </Component>
            <Component name="Dropdown">
                <Variant>
                    <Dropdown/>
                </Variant>
            </Component>
            <Component name="DropdownButton">
                <Variant>
                    <DropdownButton/>
                </Variant>
            </Component>
            <Component name="DropdownContext">
                <Variant>
                    <DropdownContext/>
                </Variant>
            </Component>
            <Component name="DropdownItem">
                <Variant>
                    <DropdownItem/>
                </Variant>
            </Component>
            <Component name="DropdownMenu">
                <Variant>
                    <DropdownMenu/>
                </Variant>
            </Component>
            <Component name="DropdownToggle">
                <Variant>
                    <DropdownToggle/>
                </Variant>
            </Component>
            <Component name="Ellipsis">
                <Variant>
                    <Ellipsis/>
                </Variant>
            </Component>
            <Component name="First">
                <Variant>
                    <First/>
                </Variant>
            </Component>
            <Component name="Last">
                <Variant>
                    <Last/>
                </Variant>
            </Component>
            <Component name="Next">
                <Variant>
                    <Next/>
                </Variant>
            </Component>
            <Component name="Prev">
                <Variant>
                    <Prev/>
                </Variant>
            </Component>
            <Component name="Fade">
                <Variant>
                    <Fade/>
                </Variant>
            </Component>
            <Component name="Feedback">
                <Variant>
                    <Feedback/>
                </Variant>
            </Component>
            <Component name="Figure">
                <Variant>
                    <Figure/>
                </Variant>
            </Component>
            <Component name="FigureCaption">
                <Variant>
                    <FigureCaption/>
                </Variant>
            </Component>
            <Component name="FigureImage">
                <Variant>
                    <FigureImage/>
                </Variant>
            </Component>
            <Component name="FloatingLabel">
                <Variant>
                    <FloatingLabel/>
                </Variant>
            </Component>
            <Component name="FormCheck">
                <Variant>
                    <FormCheck/>
                </Variant>
            </Component>
            <Component name="FormCheckInput">
                <Variant>
                    <FormCheckInput/>
                </Variant>
            </Component>
            <Component name="FormCheckLabel">
                <Variant>
                    <FormCheckLabel/>
                </Variant>
            </Component>
            <Component name="FormContext">
                <Variant>
                    <FormContext/>
                </Variant>
            </Component>
            <Component name="FormControl">
                <Variant>
                    <FormControl/>
                </Variant>
            </Component>
            <Component name="FormFloating">
                <Variant>
                    <FormFloating/>
                </Variant>
            </Component>
            <Component name="FormGroup">
                <Variant>
                    <FormGroup/>
                </Variant>
            </Component>
            <Component name="FormLabel">
                <Variant>
                    <FormLabel/>
                </Variant>
            </Component>
            <Component name="FormRange">
                <Variant>
                    <FormRange/>
                </Variant>
            </Component>
            <Component name="FormSelect">
                <Variant>
                    <FormSelect/>
                </Variant>
            </Component>
            <Component name="FormText">
                <Variant>
                    <FormText/>
                </Variant>
            </Component>
            <Component name="Image">
                <Variant>
                    <Image/>
                </Variant>
            </Component>
            <Component name="InputGroup">
                <Variant>
                    <InputGroup/>
                </Variant>
            </Component>
            <Component name="ListGroup">
                <Variant>
                    <ListGroup/>
                </Variant>
            </Component>
            <Component name="ListGroupItem">
                <Variant>
                    <ListGroupItem/>
                </Variant>
            </Component>
            <Component name="Modal">
                <Variant>
                    <Modal/>
                </Variant>
            </Component>
            <Component name="ModalBody">
                <Variant>
                    <ModalBody/>
                </Variant>
            </Component>
            <Component name="ModalContext">
                <Variant>
                    <ModalContext/>
                </Variant>
            </Component>
            <Component name="ModalDialog">
                <Variant>
                    <ModalDialog/>
                </Variant>
            </Component>
            <Component name="ModalFooter">
                <Variant>
                    <ModalFooter/>
                </Variant>
            </Component>
            <Component name="ModalHeader">
                <Variant>
                    <ModalHeader/>
                </Variant>
            </Component>
            <Component name="ModalTitle">
                <Variant>
                    <ModalTitle/>
                </Variant>
            </Component>
            <Component name="Nav">
                <Variant>
                    <Nav/>
                </Variant>
            </Component>
            <Component name="NavContext">
                <Variant>
                    <NavContext/>
                </Variant>
            </Component>
            <Component name="NavDropdown">
                <Variant>
                    <NavDropdown/>
                </Variant>
            </Component>
            <Component name="NavItem">
                <Variant>
                    <NavItem/>
                </Variant>
            </Component>
            <Component name="NavLink">
                <Variant>
                    <NavLink/>
                </Variant>
            </Component>
            <Component name="Navbar">
                <Variant>
                    <Navbar/>
                </Variant>
            </Component>
            <Component name="NavbarBrand">
                <Variant>
                    <NavbarBrand/>
                </Variant>
            </Component>
            <Component name="NavbarCollapse">
                <Variant>
                    <NavbarCollapse/>
                </Variant>
            </Component>
            <Component name="NavbarOffcanvas">
                <Variant>
                    <NavbarOffcanvas/>
                </Variant>
            </Component>
            <Component name="NavbarToggle">
                <Variant>
                    <NavbarToggle/>
                </Variant>
            </Component>
            <Component name="Offcanvas">
                <Variant>
                    <Offcanvas/>
                </Variant>
            </Component>
            <Component name="OffcanvasBody">
                <Variant>
                    <OffcanvasBody/>
                </Variant>
            </Component>
            <Component name="OffcanvasHeader">
                <Variant>
                    <OffcanvasHeader/>
                </Variant>
            </Component>
            <Component name="OffcanvasTitle">
                <Variant>
                    <OffcanvasTitle/>
                </Variant>
            </Component>
            <Component name="OffcanvasToggling">
                <Variant>
                    <OffcanvasToggling/>
                </Variant>
            </Component>
            <Component name="Overlay">
                <Variant>
                    <Overlay/>
                </Variant>
            </Component>
            <Component name="OverlayTrigger">
                <Variant>
                    <OverlayTrigger/>
                </Variant>
            </Component>
            <Component name="PageItem">
                <Variant>
                    <PageItem/>
                </Variant>
            </Component>
            <Component name="Pagination">
                <Variant>
                    <Pagination/>
                </Variant>
            </Component>
            <Component name="Placeholder">
                <Variant>
                    <Placeholder/>
                </Variant>
            </Component>
            <Component name="PlaceholderButton">
                <Variant>
                    <PlaceholderButton/>
                </Variant>
            </Component>
            <Component name="Popover">
                <Variant>
                    <Popover/>
                </Variant>
            </Component>
            <Component name="PopoverBody">
                <Variant>
                    <PopoverBody/>
                </Variant>
            </Component>
            <Component name="PopoverHeader">
                <Variant>
                    <PopoverHeader/>
                </Variant>
            </Component>
            <Component name="ProgressBar">
                <Variant>
                    <ProgressBar/>
                </Variant>
            </Component>
            <Component name="Ratio">
                <Variant>
                    <Ratio/>
                </Variant>
            </Component>
            <Component name="Row">
                <Variant>
                    <Row/>
                </Variant>
            </Component>
            <Component name="SSRProvider">
                <Variant>
                    <SSRProvider/>
                </Variant>
            </Component>
            <Component name="Spinner">
                <Variant>
                    <Spinner/>
                </Variant>
            </Component>
            <Component name="SplitButton">
                <Variant>
                    <SplitButton/>
                </Variant>
            </Component>
            <Component name="Stack">
                <Variant>
                    <Stack/>
                </Variant>
            </Component>
            <Component name="Tab">
                <Variant>
                    <Tab/>
                </Variant>
            </Component>
            <Component name="TabContainer">
                <Variant>
                    <TabContainer/>
                </Variant>
            </Component>
            <Component name="TabContent">
                <Variant>
                    <TabContent/>
                </Variant>
            </Component>
            <Component name="TabPane">
                <Variant>
                    <TabPane/>
                </Variant>
            </Component>
            <Component name="Table">
                <Variant>
                    <Table/>
                </Variant>
            </Component>
            <Component name="Tabs">
                <Variant>
                    <Tabs/>
                </Variant>
            </Component>
            <Component name="ThemeProvider">
                <Variant>
                    <ThemeProvider/>
                </Variant>
            </Component>
            <Component name="Toast">
                <Variant>
                    <Toast/>
                </Variant>
            </Component>
            <Component name="ToastBody">
                <Variant>
                    <ToastBody/>
                </Variant>
            </Component>
            <Component name="ToastContainer">
                <Variant>
                    <ToastContainer/>
                </Variant>
            </Component>
            <Component name="ToastContext">
                <Variant>
                    <ToastContext/>
                </Variant>
            </Component>
            <Component name="ToastFade">
                <Variant>
                    <ToastFade/>
                </Variant>
            </Component>
            <Component name="ToastHeader">
                <Variant>
                    <ToastHeader/>
                </Variant>
            </Component>
            <Component name="ToggleButton">
                <Variant>
                    <ToggleButton/>
                </Variant>
            </Component>
            <Component name="ToggleButtonGroup">
                <Variant>
                    <ToggleButtonGroup/>
                </Variant>
            </Component>
            <Component name="Tooltip">
                <Variant>
                    <Tooltip/>
                </Variant>
            </Component>
            <Component name="TransitionWrapper">
                <Variant>
                    <TransitionWrapper/>
                </Variant>
            </Component>
            <Component name="_default">
                <Variant>
                    <_default/>
                </Variant>
            </Component>
        </Category>
    </Palette>
)

export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    )
}
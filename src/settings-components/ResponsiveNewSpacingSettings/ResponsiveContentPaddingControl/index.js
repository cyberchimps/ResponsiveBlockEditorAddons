
import RbeaDimensionControl from "../../RbeaDimensionControl"

const { Dashicon, TabPanel } = wp.components;

export default function ResponsiveContentPaddingControl (props) {

    return (
        <>  
        <TabPanel
            className="responsive-size-type-field-tabs rbea-responsive-controls responsive-size-type-field__common-tabs  responsive-inline-margin"
            activeClass="active-tab"
            tabs={[
                {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                    " responsive-desktop-tab  responsive-responsive-tabs",
                },
                {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className: " responsive-tablet-tab  responsive-responsive-tabs",
                },
                {
                    name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                    className: " responsive-mobile-tab  responsive-responsive-tabs",
                },
            ]}
        >
        {(tab) => {
            let tabout;
  
            if ("mobile" === tab.name) {
                tabout = (
                    <RbeaDimensionControl
                     {...{...props, tabName: 'Mobile', controlName: 'padding'}}
                    />
            );
            } else if ("tablet" === tab.name) {
                tabout = (
                    <RbeaDimensionControl {...{...props, tabName: 'Tablet', controlName: 'padding' }}/>
            );
            } else {
                tabout = (
                    <RbeaDimensionControl {...{...props, tabName: '', controlName: 'padding'}}/>
            );
            }
  
            return <div>{tabout}</div>;
        }}
        </TabPanel>
        </>
    );
}
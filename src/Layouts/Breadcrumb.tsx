import { Breadcrumb, ChevronEndIcon } from '@fluentui/react-northstar';
import { observer } from 'mobx-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { strings } from '../i18n';

interface IBreadcrumbProps { }
const BreadcrumbTop: React.FC<IBreadcrumbProps> = observer(() => {
    const location = useLocation();
    let currentLocation: string = location.pathname.replace('-', ' ').replace('/', '') 
    const { t } = strings
 
    let finalSentence = currentLocation.replace(/(^\w{0})|(\s+\w{1})/g, letter => letter.toUpperCase()).replace(" ", "");


    console.log(finalSentence)

    return (
        <React.Fragment>
            <Breadcrumb aria-label="breadcrumb" className='breadcrumb_header'>
                <Breadcrumb.Item>
                    <Link to="/" >
                        {t("menus.home")}
                    </Link>
                </Breadcrumb.Item>
                {
                    currentLocation ? (
                        <>
                            <Breadcrumb.Divider>
                                <ChevronEndIcon />
                            </Breadcrumb.Divider>
                            <Breadcrumb.Item>
                                <div className="current-location" style={{ textTransform: "capitalize" }}>{t(`menus.${finalSentence}`)}</div>
                            </Breadcrumb.Item>
                        </>
                    ) : (
                        ""
                    )
                }
            </Breadcrumb>



        </React.Fragment>
    )
})

export default BreadcrumbTop

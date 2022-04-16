import React from "react"
import Layout from "../newcomp/Layout/Layout"
import styled from "@emotion/styled"
import changeLogData from "../assets/development/change-log-data.json"
import plansData from "../assets/development/future-plans.json"
import issuesData from "../assets/development/known-issues.json"
import { COLORS } from "../styles/globalstyles/theme"

const LogRender = styled.div`
    h4 {
        margin-bottom: 0;
    }
    p {
        color: ${COLORS.placeholder};
    }
    margin-bottom: 1em;
    :not(:last-child) {
        border-bottom: 1px solid var(--color-bg3, ${COLORS.bg3.light});
    }
`

const ItemList = styled.ul`
    padding-bottom: 1em;
    li {
        margin: 5px 0 5px 1em;
    }
    transition: 0.3s ease padding;
    
`

const PlansIssuesRender = styled.div`
    margin-bottom: 1em;
`

const Dev = () => {
    return (
        <Layout title="Development">
            <h1>Development</h1>
            {plansData.plans.length !== 0 &&
                <PlansIssuesRender>
                    <h2>Future Plans</h2>
                    <ItemList>
                        {plansData.plans.map(plan => (
                            <li>{plan}</li>
                        ))}
                    </ItemList>
                </PlansIssuesRender>
            }
            {issuesData.issues.length !== 0 &&
                <PlansIssuesRender>
                    <h2>Known Issues</h2>
                    <ItemList>
                        {issuesData.issues.map(plan => (
                            <li>{plan}</li>
                        ))}
                    </ItemList>
                </PlansIssuesRender>
            }
            <h2>Change Log</h2>
            {changeLogData.changelog.map(update => (
                <LogRender>
                    <h4>v{update.v} - {update.title} </h4><p>{update.date}</p>
                    <ItemList>{update.new.map(item => (
                        <li>{item}</li>
                    ))}
                    </ItemList>
                </LogRender>
            ))}

        </Layout>
    )
}

export default Dev
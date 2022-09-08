import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Table } from '@fluentui/react-northstar';



const PendingTasks: React.FC<any> = observer(() => {

    const ages = [22, 33, 17, 12, 40, 22, 26];


    const newAges: number[] = []
    const filterAge = ages.findIndex(checkAgee => {
        return checkAgee === 17
    });
    console.log(filterAge)


    return (
        <>
            <Table>
                {
                    newAges.map((data, index) => {
                        return (
                            <>
                                <li>{data}</li>
                            </>
                        )
                    })
                }


            </Table>
        </>
    )
})


export default PendingTasks;
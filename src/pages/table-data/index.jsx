import React, { Fragment,useState,useCallback,useMemo} from 'react';
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import {tableData} from './dummyTableData'
import { Row,Col,Card} from 'react-bootstrap';

const DataTables = () =>  {

  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [data, setData] = useState(tableData);

 const tableColumns = [
    {
        name: 'ID',
        selector: 'id', 
        sortable: true,
        center:true,
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
        center:true,
    },
    {
        name: 'Status',
        selector: 'status',
        sortable: true,
        center:true,
    },
    {
        name: 'Creat_on',
        selector: 'creat_on',
        sortable: true,
        center:true,
    },
  ]

  
  const handleRowSelected = useCallback(state => {
      setSelectedRows(state.selectedRows);
    }, []);
    const contextActions = useMemo(() => {
      const handleDelete = () => {
        
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.name)}?`)) {
          setToggleCleared(!toggleCleared);
          setData(differenceBy(data, selectedRows, 'name'));
          toast.success("Successfully Deleted !")
        }
      };
  
      return <button key="delete" className="btn btn-danger" onClick={handleDelete}>Delete</button>;
    }, [data, selectedRows, toggleCleared]);

    return (
        <Fragment>
            <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header>
                                <h5>Select Multiple and Delete Single Data</h5>
                            </Card.Header>
                            <Card.Body>
                              <DataTable
                                data={data}
                                columns={tableColumns}
                                striped={true}
                                center={true}
                                selectableRows
                                persistTableHead
                                contextActions={contextActions}
                                onSelectedRowsChange={handleRowSelected}
                                clearSelectedRows={toggleCleared}
                              />
                            
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Fragment>
    );

};

export default DataTables;
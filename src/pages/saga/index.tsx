import { GetRegionReq } from '@/redux-saga/action/regionAction';
import React, { useEffect, useState } from 'react';
import { DeleteRegionRequest } from '../../redux-saga/action/regionAction';
import { useDispatch, useSelector } from 'react-redux';
import add from './AddRegion';
import AddRegion from './AddRegion';
import UpdateRegion from './UpdateRegion';

export default function RegionSaga() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state: any) => state.regionState);
  const [display, setDisplay] = useState(false);
  const [edit, setEdit] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [name, setName] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetRegionReq());
    setRefresh(false);
  }, [dispatch, refresh]);

  const onDelete = async (id: string) => {
    dispatch(DeleteRegionRequest(id));
    window.alert('Data Successfully Delete');
    setRefresh(true);
  };

  return (
    <div>
      {display ? (
        <AddRegion setDisplay={setDisplay} setRefresh={setRefresh} />
      ) : edit ? (
        <UpdateRegion
          setEdit={setEdit}
          setRefresh={setRefresh}
          setName={name}
          setId={id}
        />
      ) : (
        <>
          <h2>List Region</h2>
          <button className="mt-4" onClick={() => setDisplay(true)}>
            Add Region
          </button>
          <table>
            <thead>
              <tr>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Region Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {regions &&
                regions.map((item: any) => {
                  return (
                    <>
                      <tr>
                        <th>{item.regionId}</th>
                        <td>{item.regionName}</td>
                        <td>{item.regionPhoto}</td>
                        <td>
                          <button
                            className="px-5"
                            onClick={() => {
                              setEdit(true);
                              setName(item.regionName);
                              setId(item.regionId);
                            }}
                          >
                            Edit
                          </button>

                          <button onClick={() => onDelete(item.regionId)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

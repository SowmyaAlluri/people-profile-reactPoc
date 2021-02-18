import React, { useEffect, useState } from 'react';
import axioms from 'axios';
import Profile from './profile/profile';
import classes from './Profiles.css'


function Profiles() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        async function details() {
            for (let i = 0; i < 100; i++) {
                let det = [];
                await axioms.get('https://randomuser.me/api/').then(result => {
                    console.log(result.data.results[0]);
                    let res = result.data.results[0];
                    det.push(res.name.title);
                    det.push(res.name.first);
                    det.push(res.name.last);
                    det.push(res.gender);
                    det.push(res.email);
                    det.push(res.picture.medium);
                    console.log(det);
                    setProfile([...profile, profile.push(det)]);
                    console.log({ profile });

                }
                )
            }
        }
        details();
    }, []);

    return (
        <div className='row rowStyle'>
            <React.Fragment> {profile.map((_profile, index) => {
                return (<React.Fragment>
                    <div className={classes.Profiles}>
                        <Profile key={index} name={_profile[0] + ' ' + _profile[1]}
                            gender={_profile[3]}
                            email={_profile[4]}
                            picture={_profile[5]} />
                    </div>
                </React.Fragment>)
            }

            )}

            </React.Fragment>
            </div>

    )
      
}


export default Profiles;

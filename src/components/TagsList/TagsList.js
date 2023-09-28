import styles from './TagsList.module.scss';

function Tag({item}) {
    return (
        <>
            <div className={styles['tag']}>
                <p> {item} </p>
            </div>
        </>
    );
}


export default function TagsList({ tags, isloading }) {
    console.log(tags);
    return(
        <>  
            <div className={styles['container_tags_list']} >
                <div className={styles['tags_list']} >
                    {/* <p> загрузка </p> */}
                    {
                        tags.map((item, index) => 
                            
                            isloading? (
                                <p> загрузка </p>
                            ) : (
                                <Tag key={index} item={item} />
                            )
                            
                        )
                    }
                </div>
                <div className={styles['profile_about_container']} >
                    <div className={styles['profile_about']} >
                        <h2> Name lastname</h2>
                        <p> activiti:  </p>
                        <p> activiti:  </p>
                        <p> activiti:  </p>
                    </div>
                </div>
            </div>
        </>
    );
}
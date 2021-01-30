import React from 'react';
import PostsIcon from "../../../../components/SvgIcons/PostsIcon";
import BookmarkIcon from "../../../../components/SvgIcons/BookmarkIcon";

const PostContainerTabs = ({ activeTab, tabClickHandler }) => {

  const onClickHandler = (event) => {
    const { tab } = event.currentTarget.dataset
    tabClickHandler(tab)
  }

  return (
    <div className='user-post-container__tabs'>
      <div className={ `user-post-container__tabs__item__wrapper ${ activeTab === 'posts' ? 'active' : null }` }>
        <div className='user-post-container__tabs__item' data-tab='posts' onClick={ onClickHandler }>
          <PostsIcon/>
          <p>
            Posts
          </p>
        </div>
      </div>
      <div className={ `user-post-container__tabs__item__wrapper ${ activeTab === 'saved' ? 'active' : null }` }>
        <div className="user-post-container__tabs__item" data-tab='saved' onClick={ onClickHandler }>
          <BookmarkIcon/>
          <p>
            Saved
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostContainerTabs;
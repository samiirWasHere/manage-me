import withReducer from 'app/store/withReducer';
import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import withRouter from '@fuse/core/withRouter';
import { useDeepCompareEffect } from '@fuse/hooks';
import FusePageSimple from '@fuse/core/FusePageSimple';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../store';
import { getBoard, reorderCard, reorderList, resetBoard, selectBoard } from '../store/boardSlice';
import BoardAddList from './board-list/BoardAddList';
import BoardList from './board-list/BoardList';
import BoardCardDialog from './dialogs/card/BoardCardDialog';
import BoardSettingsSidebar from './sidebars/settings/BoardSettingsSidebar';
import { getCards } from '../store/cardsSlice';
import { getLists } from '../store/listsSlice';
import { getLabels } from '../store/labelsSlice';
import BoardHeader from './BoardHeader';

const Board = (props) => {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const routeParams = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useDeepCompareEffect(() => {
    dispatch(getBoard(routeParams.boardId));
    dispatch(getCards(routeParams.boardId));
    dispatch(getLists(routeParams.boardId));
    dispatch(getLabels(routeParams.boardId));

    return () => {
      dispatch(resetBoard());
    };
  }, [dispatch, routeParams]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    if (result.type === 'list') {
      dispatch(reorderList(result));
    }

    if (result.type === 'card') {
      dispatch(reorderCard(result));
    }
  }

  if (!board) {
    return null;
  }

  const isAuthenticated = (req, res, next) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      try {
        jwt.verify(token, SECRET_KEY);
        next();
      } catch (error) {
        res.status(403).jsonp({ message: 'Invalid token' });
      }
    } else {
      res.status(401).jsonp({ message: 'Unauthorized' });
    }
  };

  console.log(board, 'board');
  console.log(board, 'board');

  return (
    <>
      <FusePageSimple
        header={<BoardHeader onSetSidebarOpen={setSidebarOpen} />}
        content={
          <>
            {board?.lists && (
              <div className="flex flex-1 overflow-x-auto overflow-y-hidden h-full">
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="list" type="list" direction="horizontal">
                    {(provided) => (
                      <div ref={provided.innerRef} className="flex py-16 md:py-24 px-8 md:px-12">
                        {board?.lists.map((list, index) => (
                          <BoardList
                            key={list.id}
                            listId={list.id}
                            cardIds={list.cards}
                            index={index}
                          />
                        ))}

                        {provided.placeholder}

                        <BoardAddList />
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            )}
          </>
        }
        rightSidebarOpen={sidebarOpen}
        rightSidebarContent={<BoardSettingsSidebar onSetSidebarOpen={setSidebarOpen} />}
        rightSidebarOnClose={() => setSidebarOpen(false)}
        scroll={isMobile ? 'normal' : 'content'}
        rightSidebarWidth={320}
        leftToRightSide={!sidebarOpen}
      />
      <BoardCardDialog />
    </>
  );
}

export default withReducer('scrumboardApp', reducer)(withRouter(Board));

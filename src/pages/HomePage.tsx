import { Navigate } from "react-router-dom";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { teamMemberSlice } from "../store/slices/teamMemberSlice";
import { useEffect } from "react";
import { fetchMembers } from "../store/reducers/actionCreators"

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch()
  const { members } = useAppSelector(state => state.teamMembers)

  useEffect(() => {
    dispatch(fetchMembers())
  }, [])

  return isAuth ? (
    <div>
      <Header />
      { members && <CardList items={members} /> }
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;

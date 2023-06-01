import PropTypes from "prop-types";
import classNames from "classnames";
import Container from "../../Container";
import Skeleton from "../../Skeleton";
import Table from "./Table";
import TableHead from "./TableHead";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableData from "./TableData";
import generateArray from "../../../helpers/generateArray";

const namespace = "table";

const TableSkeleton = ({ numberOfRows, className }) => {
  const componentClassNames = classNames(`${namespace}--skeleton`, className);
  return (
    <Container className={componentClassNames}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeading>
              <Skeleton width="17px" />
            </TableHeading>
            <TableHeading>
              <Skeleton width="50px" />
            </TableHeading>
            <TableHeading>
              <Skeleton width="50px" />
            </TableHeading>
            <TableHeading>
              <Skeleton width="70px" />
            </TableHeading>
            <TableHeading>
              <Skeleton width="40px" />
            </TableHeading>
            <TableHeading>
              <Skeleton width="54px" />
            </TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {generateArray(numberOfRows).map((product) => (
            <TableRow key={product.id}>
              <TableData>
                <Skeleton width="17px" />
              </TableData>
              <TableData>
                <Skeleton width="156px" />
              </TableData>
              <TableData>
                <Skeleton width="511px" />
              </TableData>
              <TableData>
                <Skeleton width="509px" />
              </TableData>
              <TableData>
                <Skeleton width="40p" />
              </TableData>
              <TableData>
                <Skeleton width="54px" />
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

TableSkeleton.propTypes = {
  numberOfRows: PropTypes.number,
  className: PropTypes.string,
};

TableSkeleton.defaultProps = {
  numberOfRows: 10,
  className: "",
};

export default TableSkeleton;

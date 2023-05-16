import classNames from "classnames";

const namespace = "body";

export const Body = ({ className }) => {
  const componentClassnames = classNames(namespace, className);
  return (
    <main className={`${namespace}`}>
      <section className={`${namespace}__search`}>
        <h3>Buscador</h3>
        {/* Aquí iría el buscador */}</section>
      <section className={`${namespace}__categories`}>
        <h3>Categorias</h3>
        {/* Aquí irían las categorías */}</section>
      <section className={`${namespace}__recommendations`}>
        <h3>Recomendaciones</h3>
        {/* Aquí irían las recomendaciones de productos */}</section>
    </main>
  );
};

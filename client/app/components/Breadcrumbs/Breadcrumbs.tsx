import "./Breadcrumbs.scss";

interface IBreadcrumb {
  id: number;
  title: string;
  href?: string;
}

interface BreadcrumbsProps {
  path: IBreadcrumb[];
}

const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
  return (
    <div className="breadcrumbs container">
      {path.map(({ id, title, href }) =>
        href ? (
          <a href={href} className="breadcrumbs__link" key={id}>
            {title}
          </a>
        ) : (
          <p className="breadcrumbs__text" key={id}>
            {title}
          </p>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;

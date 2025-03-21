import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Page } from "../../objects/page-view.objects";

@Component({
  selector: 'page-view-component',
  templateUrl: './page-view.component.html',
  styleUrl: './page-view.component.scss',
  imports: [CommonModule]
})
export class PageView {
  currentPage: Page | undefined = new Page(
    "Página teste",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis ut magna at sagittis. Vivamus tempor velit felis, in ullamcorper augue interdum et. Nullam aliquam elit at fermentum efficitur. Aliquam erat volutpat. Duis eu lectus tincidunt, finibus elit vel, consectetur tellus. Sed dui nulla, elementum vitae varius et, dignissim ut neque. Fusce ornare tellus turpis, ac dictum metus iaculis iaculis. In interdum consequat ex, eu imperdiet quam tincidunt non. Nulla eget fringilla enim, at maximus justo. Nunc commodo enim quis ligula elementum tristique. Sed laoreet erat non tincidunt maximus. Morbi vel neque sollicitudin, convallis erat eu, imperdiet mauris. Nullam sed libero vitae nulla venenatis lobortis nec et augue.
    Nam ut ultrices enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sem metus, egestas eu dictum eget, ornare eget arcu. Etiam sit amet maximus erat, et sodales magna. Nam viverra massa nulla, sed elementum felis egestas vel. In hac habitasse platea dictumst. Fusce magna nunc, pulvinar eu ante quis, elementum sodales lacus. Sed ultrices ac nunc non blandit. Sed suscipit urna dignissim, auctor neque a, suscipit nibh. Aenean nec orci id sem luctus volutpat et sit amet tellus. Ut vehicula gravida urna dapibus dictum.
    Pellentesque ac felis in felis laoreet hendrerit viverra vitae ipsum. Sed nec arcu euismod, sagittis tellus sed, semper massa. Duis velit eros, viverra in suscipit nec, ornare nec lorem. Donec sed tellus vitae nisl pellentesque rhoncus in venenatis massa. Nulla rhoncus dolor in ligula viverra sagittis. Ut vulputate porttitor elit quis pharetra. Maecenas aliquam dolor in gravida porttitor.
    Donec pellentesque augue turpis, nec porta lacus auctor et. Vestibulum vel tempus lorem. Praesent et quam nunc. Aliquam erat volutpat. Vestibulum tempor, tortor quis scelerisque hendrerit, nulla urna sollicitudin felis, et sollicitudin orci nibh sit amet urna. Aliquam ullamcorper sodales ante, sed imperdiet lorem condimentum a. Sed sit amet venenatis metus. Nam eget interdum arcu. Nullam maximus sollicitudin sem, vel eleifend dui scelerisque quis. Sed sapien arcu, molestie sed rhoncus vitae, semper eget mauris. Nam nec libero at odio imperdiet condimentum. Nunc suscipit sem erat, non suscipit nisl fermentum et. Etiam fermentum, nulla ut vestibulum vehicula, magna lorem laoreet ante, id pellentesque enim est vel turpis. Nunc tempor tortor est, porta dictum tellus commodo eget. Phasellus finibus nibh imperdiet ultricies tristique. Nulla placerat et orci quis pretium.
    Aliquam suscipit commodo sapien vitae efficitur. Curabitur elementum tincidunt ligula, sed laoreet enim malesuada faucibus. Morbi elit justo, consectetur ut facilisis et, sollicitudin vitae augue. Maecenas lectus dui, commodo quis efficitur tincidunt, sodales commodo metus. Mauris lacinia ornare pharetra. Proin vestibulum, lorem at convallis dapibus, risus lectus sollicitudin orci, et maximus nulla justo at lectus. Vestibulum nec volutpat mauris. Nullam varius ex sed mi euismod vestibulum. Proin vitae velit eget nunc malesuada lacinia. Quisque aliquet vulputate tellus, et iaculis velit lacinia vitae. Etiam sodales pretium nunc.`
  );
  pageLoaded: boolean = false;

  constructor() {
    this.loadPage();
  }

  loadPage() {
    this.pageLoaded = this.currentPage?.title != undefined;
  }

}